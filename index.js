import supabase from 'https://unpkg.com/@supabase/supabase-js@2'
const supabased = createClient('https://rivaadrywxieeuqkyjjk.supabase.co', process.env.SUPABASE_KEY);

async function fetchKeys() {
    const { data, error } = await supabased.from('Keys').select();
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }
};