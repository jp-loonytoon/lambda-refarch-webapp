// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "8i35iar79cnrggq3smms73nuj",     // CognitoClientID
  "api_base_url": "https://9z0r7mktkd.execute-api.eu-west-3.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-app.auth.eu-west-3.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d169iaznc38kvw.amplifyapp.com"                                      // AmplifyURL
};

export default config;
