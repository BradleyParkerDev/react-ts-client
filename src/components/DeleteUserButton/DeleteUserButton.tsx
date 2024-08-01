import deleteUserData from "@/lib/data/deleteUserData";
import { Button } from "../ui/button";
import { useDispatch } from 'react-redux'
const DeleteUserButton =  () => {
    const dispatch = useDispatch();

  return (

    <Button className="font-bold" variant="destructive" onClick={(()=>{deleteUserData(dispatch)})}>Delete</Button>
  )
}

export default DeleteUserButton