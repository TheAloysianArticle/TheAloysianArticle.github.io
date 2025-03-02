import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
// import { createClient } from '../node_modules/@supabase/supabase-js/src/index.ts'

const supabase = createClient('https://rivaadrywxieeuqkyjjk.supabase.co', process.env.SUPABASE_KEY);

async function fetchKeys() {
    const { data, error } = await supabase.from('Keys').select();
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }
};