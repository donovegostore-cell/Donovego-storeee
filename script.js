body{
margin:0;
font-family:Arial,sans-serif;
background:#f5f5f5;
}

header{
background:#111;
color:#fff;
padding:20px;
text-align:center;
}

.productos{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:20px;
padding:20px;
}

.producto{
background:#fff;
border-radius:15px;
overflow:hidden;
box-shadow:0 5px 15px rgba(0,0,0,.12);
}

.slider{
position:relative;
overflow:hidden;
}

.slider img{
display:none;
width:100%;
height:300px;
object-fit:cover;
}

.slider img.active{
display:block;
}

.controles{
display:flex;
justify-content:space-between;
padding:10px;
}

button{
background:#25D366;
color:white;
border:none;
padding:12px;
border-radius:8px;
cursor:pointer;
width:100%;
font-size:16px;
margin-top:10px;
}

.info{
padding:15px;
}
