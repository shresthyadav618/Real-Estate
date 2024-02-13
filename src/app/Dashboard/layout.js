
import Header from "../../../components/Header"
import NewHeader from "../../../components/NewHeader"
export default function layout({children}){
    return (
        <>
         <NewHeader/>
        <Header/>
        
        {children}
        </>
       
    )
}


