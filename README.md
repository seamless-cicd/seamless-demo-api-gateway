# Seamless Demo

Simulates a microservice architecture with 3 services that communicate with each other. The CI/CD pipeline enables us to update and deploy each one independently.

1. API Gateway + React app hosting
2. Payment Service
3. Notification Service

## This Repo is Microservice 1: API Gateway

### Serves React app using `static`

### Has an Express app with 2 routes:

`/payments`

Make a POST request to send a message to Microservice #2: Payments Service
```
{
    "amount": 42
}
```

`/notifications`
Make a POST request to send a message to Microservice #3: Notification Service

```
{
    "message": "Your payment is due: $42"
}
```