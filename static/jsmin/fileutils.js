function abs_url(e){let t=document.createElement("a");return t.href=e,t.href}function unfade(e){let t=.1;e.style.display="block";const n=setInterval(()=>{t>=1&&clearInterval(n),e.style.opacity=t,e.style.filter=`alpha(opacity=${100*t})`,t+=.1*t},10)}function fade(e){let t=.1;e.style.display="block";const n=setInterval(()=>{parseInt(t)<=0&&(clearInterval(n),e.style.display="none"),e.style.opacity=t,e.style.filter=`alpha(opacity=${100*t})`,t-=.1*t},15)}function sbm_url(){const e=document.getElementById("remote_inp");0===e.value.replace(/[^\w]/,"").length&&(document.getElementById("gobtn").innerHTML="Invalid Characters",document.getElementById("gobtn").disabled=!0),document.getElementById("gobtn").disabled=!1,window.location.href=`/fetch/?url=${encodeURIComponent(e.value)}`}function progress(e,t,n){const l=t/e*100;l>=100&&(document.getElementById("filact").innerText="complete"),document.getElementById("rdf").style.display="block",document.getElementById("filact").innerText=`${n} file`,document.getElementById("progress-div").style.width=`${l}%`}async function upload(e){console.log(e);const t=e.target.files[0],n=new XMLHttpRequest;n.open("POST","/upload/"),n.upload.onprogress=(e=>{progress(e.total,e.loaded,"Uploading")}),n.setRequestHeader("X-File-Name",t.name),n.onload=async function(){document.getElementById("filact").innerText="Complete";const e=JSON.parse(this.response),t=(e.nonce,e.file),n=`/dl/${t}`;document.getElementById("xrhf").style.display="block";const l=document.getElementById("file-url"),o=document.getElementById("file-url_helper");var c;document.getElementById("fname").innerHTML=t,l.value=abs_url(n),l.onclick=(()=>{c=o,l.select(),document.execCommand("copy"),c&&(c.innerHTML="copied")})},n.send(t)}