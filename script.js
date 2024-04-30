
const order=document.getElementById("order");

order.onclick=function()
{
    
        let y = prompt("YOUR NAME: ");
        let x = prompt("YOUR EMAIL : ");
        if (x == null || x=="") 
        {
            alert('Please enter a valid e-mail address');
        }  
        else  
        {
        window.location.href="https://www.zomato.com/chandigarh/kfc-sector-35/order";
        }
    
}