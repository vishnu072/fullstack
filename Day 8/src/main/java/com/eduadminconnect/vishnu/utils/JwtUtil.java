
package com.eduadminconnect.vishnu.utils;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
// import java.util.HashMap;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtUtil {
    @Value("${application.jwt.secret_key}")
    private String secret_key;
    public String extractUsername(String token){
        return extractClaim(token,Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token){
        return Jwts.parserBuilder()
        .setSigningKey(getSigningKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
    }
        private Key getSigningKey()
        {
            byte[] KeyBytes = Decoders.BASE64.decode(secret_key);
            return Keys.hmacShaKeyFor(KeyBytes);
        }
        public boolean isTokenValid(String token, UserDetails userDetails)
        {
            final String username = extractUsername(token);
            return (username.equals(userDetails.getUsername()))&&!isTokenExpired(token);
        }
    
        private boolean isTokenExpired(String token) {
            return extractExpiration(token).before(new Date());
        }
    
        private Date extractExpiration(String token) {
            return extractClaim(token, Claims::getExpiration);
        }

        public String generateToken(UserDetails userDetails) {
            return generateToken(new HashMap<>(), userDetails);
        }
        private String generateToken(Map<String, Object> extraClaims, UserDetails userDetails){
            return Jwts.builder()
            .setClaims(extraClaims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis()+1000*24*60))
            .signWith(getSigningKey(),HS256)
            .compact();
        }
    }