let lists = document.getElementsByClassName("list")
let right_box = document.getElementsByClassName("right")[0]

let left_box = document.getElementsByClassName("left")[0]
let selected = null;
for(let list of lists){
    list.addEventListener('dragstart',function(e){
        selected = e.target
    })

    right_box.addEventListener('dragover',function(e){
        e.preventDefault();
    })

    right_box.addEventListener('drop',function(e){
        if(selected){
            right_box.appendChild(selected);
        selected=null
        }
    })

    left_box.addEventListener('dragover',function(e){
        e.preventDefault();
    })

    left_box.addEventListener('drop',function(e){
        if (selected){
            left_box.appendChild(selected);
        selected=null
        }
    })
}
