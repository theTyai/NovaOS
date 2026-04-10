const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate a structured syllabus from raw text or titles
 * @param {string} rawContent 
 * @param {string} sourceType 
 */
exports.generateSyllabus = async (rawContent, sourceType) => {
  const prompt = `
    You are an AI Study Assistant for NovaOS. 
    Transform the following raw content into a structured learning syllabus.
    
    Source Type: ${sourceType}
    Content: ${rawContent}
    
    Format the response as a JSON array of daily modules:
    [
      {
        "title": "Module Title",
        "content": "Brief description of what to learn",
        "estimatedHours": 2,
        "order": 1
      }
    ]
    
    Ensure the plan is realistic for a student and logically sequenced.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content);
    return result.modules || result;
  } catch (err) {
    console.error('AI Syllabus Generation Error:', err);
    throw new Error('Failed to generate syllabus');
  }
};

/**
 * AI Task Recommendations based on current progress
 */
exports.recommendTasks = async (userData) => {
  // logic for personalized recommendations
};
