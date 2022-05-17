const gatos: string[] = [
    'lora',
    'logan'
]

 function exibeGatos(gatos: string[]) {
     return `os gatos são ${gatos.join(', ')}`
 }

 console.log(exibeGatos(gatos))