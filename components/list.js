  
const Displaylist=(listitem)=>{
    return(<ul>
            {listitem.map(function(a,b){
            return (<li><a href="${a.link}">{a.name}</a></li>)
            }
            )}
            
    </ul>
    );

}
export default Displaylist