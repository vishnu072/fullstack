package com.eduadminconnect.vishnu.config;
import java.io.IOException;
import org.springframework.http.HttpHeaders;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.eduadminconnect.vishnu.utils.JwtUtil;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationConfig extends OncePerRequestFilter {

  private final JwtUtil jwtUtil;
  private final UserDetailsService userDetailsService;
  @Override
  protected void doFilterInternal(
    @NonNull HttpServletRequest request, 
    @NonNull HttpServletResponse response,
    @NonNull FilterChain filterChain)
    throws ServletException, IOException {

      String authHeader= request.getHeader(HttpHeaders.AUTHORIZATION);
      String token;
      String username;
      if(authHeader==null || !authHeader.startsWith("Bearer")){
        filterChain.doFilter(request, response);
        return;
      }
      token = authHeader.substring(7);
      username=jwtUtil.extractUsername(token);
      if(username != null && SecurityContextHolder.getContext().getAuthentication()==null){
        UserDetails userDetails= this.userDetailsService.loadUserByUsername(username);
        if(jwtUtil.isTokenValid(token, userDetails)) {
          UsernamePasswordAuthenticationToken authToken= new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
          authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
          SecurityContextHolder.getContext().setAuthentication(authToken);
        }
        filterChain.doFilter(request, response);
      }
    }
}