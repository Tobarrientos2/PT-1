<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData, ActionData} from "./$types";
    import type { Action } from "@sveltejs/kit";
    import { page } from "$app/stores";
    export let data: PageData;
    export let form: ActionData;
    let promise = m_bool_CreateHtml_obj();

    async function m_bool_CreateHtml_obj(bool_i: any){
        let prm_p = new Promise((resolve, reject) =>{
            if(bool_i === true){
                resolve({ html: '<div>La respuesta ha sido exitosa</div>'});
            } 
            else if(bool_i === undefined){
                resolve({html: '<div></div>'});
            } 
            else if(bool_i === false){
            resolve({html: '<div>La respuesta ha sido erronea. Intentelo más tarde</div>'})
        } 
        })
        let prm_p2 = await prm_p;
        console.log(prm_p2)
       return prm_p2;
    }; 

    console.log($page.form)
    function m_txt_handleFucntion_txt(){
        //En caso de que $page.form sea un objeto
    }; 
    let g_m_txt_handleFucntion_txt = m_txt_handleFucntion_txt();



</script>

<form action="?/submit" method="POST">
    <input type="email"  name="data" placeholder="Introduce tu correo electrónico">
<button type="submit">Enviar correo</button>
</form>
<button on:click={g_m_txt_handleFucntion_txt}>Generar html</button>

{#if form?.success}
<p>Exito</p>
{/if} 

