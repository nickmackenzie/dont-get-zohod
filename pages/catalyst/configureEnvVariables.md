---
title: Configure Environment Variables
description: Configuring and accessing environment variables in functions
---

# Configure Environment Variables

## Setting Up Environment Variables

Catalyst environment variables can be used for securely storing sensitive data like API keys. Here's how you can configure them:

1. **Define Environment Variables:**

   **In Catalyst Console [optional]:**

   - Navigate to your project and open the function.
   - Go to `Configuration` > `Environment Variables`.
   - Click `Add Variable`, then input the name and value.

   **On Your Local Machine:**

   - Open the `catalyst-config.json` file in your function directory.
   - Add your variables under the `env_variables` key as shown:
     ```json
     {
       "deployment": {
         "name": "your-function-name",
         "stack": "node18",
         "type": "advancedio",
         "env_variables": {
           "API_KEY": "**secret_value**"
         }
       },
       "execution": {
         "main": "index.js"
       }
     }
     ```

2. **Accessing Variables in Functions:**

   - Use the `process.env` object to access environment variables in your function code:
     ```javascript
     const apiKey = process.env.API_KEY;
     ```

## Syncing Existing Functions

To sync environment variables from the Catalyst console to your local machine, use the `catalyst pull` command in the CLI. This will update your local environment with the existing variables.
**Note: This will overwrite the target function code on your local machine if you have already configured the functions locally. Make sure to back up any local changes before running the command.**
