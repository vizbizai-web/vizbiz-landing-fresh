// Simple API endpoint for form submissions
// Stores leads in Airtable or JSON file

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, dealership, city } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Store lead (for now, just log it - in production, store in Airtable/DB)
    const lead = {
      id: Date.now().toString(),
      email,
      name: name || '',
      dealership: dealership || '',
      city: city || '',
      source: 'vizbiz.ai',
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    // In production, this would save to Airtable/Notion/Database
    console.log('New lead captured:', lead);

    // For now, store in a JSON file (simplest for static site)
    // In production, use Airtable API or database

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Thank you! Check your email for next steps.',
      leadId: lead.id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}