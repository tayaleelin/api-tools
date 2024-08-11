# Dynamic Certificates in Postman

To dynamically add a necessary certificate for a follow-up request in Postman based on information obtained from a previous request (like a JWT token), you can achieve this by using a pre-request script. Postman doesn’t natively support dynamically switching client certificates based on pre-request scripts, but you can still manage the request by setting custom headers, including your certificate or token information.

Here’s how you can approach this:

## Step 1: Capture JWT Token and Extract Information

First, capture the JWT token from the previous request. You can do this using a pm.sendRequest call to get the token and then extract the necessary claims.

See the script [sendRequest.js](../pre-request-scipts/sendRequest.js)

## Step 2: Use the Extracted Information to Determine Which Certificate to Use

Next, based on the extracted scope (or any other information), decide which certificate you need to use.

Unfortunately, Postman doesn’t support dynamically switching client certificates based on pre-request scripts directly, but you can work around this by:

1. Setting Headers Manually: Include a custom header (e.g., x-certificate) that your API gateway or resource server could interpret and map to a certificate.
2. Using Environment Variables: Prepare different environment variables for different scopes or certificates, and then set the relevant environment variable in your pre-request script based on the extracted scope.

See script: [certificatePerScope.js](../dynamically-add-certificates/certificatePerScope.js)

## Step 3: Apply the Certificate to the Request

Since Postman does not support dynamically assigning certificates in the request directly through pre-request scripts, you would have to manage it manually via environment configurations:

* Manual Method: Before sending a request, manually select the appropriate environment that has the correct certificate configured based on the output of the pre-request script.
* Script-Based Assignment: If possible, assign headers or other request parameters in the pre-request script to simulate the certificate-based authentication, using your server’s capabilities.

Final Pre-request Script Example:

This is a combination of the above steps, assuming you manually set or switch environments: [authenticationFlow.js](../dynamically-add-certificates/authenticationFlow.js)

This script doesn’t change the certificate used by Postman dynamically, but it helps you prepare for a manual switch or alter the request in other ways (e.g., custom headers). For dynamic certificate management, a custom client or middleware outside of Postman might be required.

To dynamically add a necessary certificate for a follow-up request in Postman based on information obtained from a previous request (like a JWT token), you can achieve this by using a pre-request script. Postman doesn't natively support dynamically switching client certificates based on pre-request scripts, but you can still manage the request by setting custom headers, including your certificate or token information.