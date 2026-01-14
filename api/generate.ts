import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt } = req.body

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    // Get API key from environment variables
    const apiKey = process.env.VITE_OPENAI_API_KEY

    if (!apiKey) {
      console.error('OpenAI API key not configured')
      return res.status(500).json({ 
        error: 'AI service not configured. Please add your OpenAI API key to environment variables.' 
      })
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant that generates creative and insightful content based on user prompts. Keep responses concise and valuable.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenAI API error:', errorData)
      return res.status(response.status).json({ 
        error: 'Failed to generate content from AI service' 
      })
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || 'No response generated'

    return res.status(200).json({ response: aiResponse })
  } catch (error) {
    console.error('Error in generate function:', error)
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
}
