import { createClient } from 'node_modules/@supabase/supabase-js/src/index.ts'

const supabase = createClient('https://rivaadrywxieeuqkyjjk.supabase.co', process.env.SUPABASE_KEY);

async function fetchKeys() {
    const { data, error } = await supabase.from('Keys').select();
    console.log(data);
    return 0;
};