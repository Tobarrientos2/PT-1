import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "./$types";



export const actions: Actions = {
    submit: async ({request}) =>  {
        const obj_p = await request.formData();
        let arr_txt_p =  obj_p.getAll('data');
        let obj_p2 = new Promise((resolve, reject) => {
            if(!arr_txt_p.includes('tobarrientos1@protonmail.com')){
                resolve({succes: false})
            } 
            resolve({success: true})
        })        
        let obj_p3 = await obj_p2;
        return obj_p3;
    }
}; 
export const load: PageServerLoad =  async ({request}: RequestEvent) => {


    // let response = await actions.submit({request});


    //Obtener lo devuelvto por submit action 

    return {
        props: {
            name: ''
        } 
    } 
}