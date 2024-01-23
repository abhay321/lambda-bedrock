// Import BedrockRuntimeClient and InvokeModelCommand classes from the @aws-sdk/client-bedrock-runtime
const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");
// Instance of the BedrockRuntimeClient 
const client = new BedrockRuntimeClient({ region: "us-east-1" });

module.exports.bedrock = async (event) => {
  // Prompt for query 
  const prompt = 'Tell me a random funny joke';
  const input = {
    "modelId": "cohere.command-text-v14",
    "contentType": "application/json",
    "accept": "*/*",
    "body": JSON.stringify({
      "prompt": prompt,
      "max_tokens": 200,
      "temperature": 0.7,
      "p": 0.01,
      "k": 0
    })
  };

  try {
    // It uses the client.send method to invoke the model with the provided input.
    const data = await client.send(new InvokeModelCommand(input));
    const jsonString = Buffer.from(data.body).toString('utf8');
    // Modify data as per frontend need
    const parsedData = JSON.parse(jsonString);
    return parsedData.generations[0].text
  } catch (error) {
    return {
      status:400,
      error:error
    }
  }
};