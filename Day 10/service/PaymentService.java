package com.eduadminconnect.vishnu.service;

import com.eduadminconnect.vishnu.dto.request.PaymentRequest;

public interface PaymentService {

    PaymentResponse makePayment(PaymentRequest paymentRequest);

    PaymentResponse getPaymentById(Long paymentId);

    // You can add more methods as needed
}
