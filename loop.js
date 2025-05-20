const call = () => {
    const begin = 1
    let input = document.getElementById('in').value
    for (let i= 1; i<= input; i++) {
        let input2 = document.querySelector(`#in2`).value
        for (let j = 1; j <= input2; j++) {
            let title = document.getElementById('title')
            title = title.innerHTML = `${begin}-${input} times tables`
                result = document.createTextNode(`${i} * ${j} = ${i*j};     `)
                let out = document.querySelector(`#out`)
                out.appendChild(result)
        }
    }
}