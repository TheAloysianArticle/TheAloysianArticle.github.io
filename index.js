const { createClient } = supabase;
const _supabase = createClient('https://rivaadrywxieeuqkyjjk.supabase.co', process.env.SUPABASE_KEY);

async function fetchKeys() {
    const { data, error } = await _supabase.from('Keys').select();
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }
};