var a = document.getElementById('firstName');
//a.type="checkbox";
//a.name="abc";
// a.readOnly=true;
// var b=document.getElementById('container');
// var label=document.createElement('label');
// label.id="lb1FirstName"
// label.innerHTML="Welcome";

// b.appendChild(label);

var myPosts = [{ text: '', time: '' }];
function createPost() {
    var postContent = document.getElementById('myPost');
    var postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML='';
    myPosts.push({
        text: postContent.value,
        time: new Date()
    });
    for (var i = myPosts.length - 1; i >= 0; i--) {
        var myCard = `<div class="card">
       <div class="card-body">
        ${myPosts[i].text} ${myPosts[i].time}
        </div>
       </div>`;
        postsContainer.innerHTML += myCard;
    }
        postContent.value = '';
    
    
}




var postContent = document.getElementById('button1').addEventListener("click",createPost);
