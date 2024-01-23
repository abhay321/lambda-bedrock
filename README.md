# lambda-bedrock

## Requirements

- AWS CLI already configured with Administrator permission
- AWS serverless Framework installed(serverless --version){Framework Core: 3.38.0}

## Deploy this demo

We will be using Serverless Framework along aws cli.

Deploy the project to the cloud:

```
npm install
serverless deploy
```

Next times, when you update the code, you can deploy with:
```
serverless deploy
```

Test this function local

```
serverless invoke local --function generateJokesFunction
```
