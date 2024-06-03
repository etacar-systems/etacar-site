import logo from './../../shared/assets/Logo.svg'
import Menu from "../Menu/ui/Menu";
import '../../shared/styles/_all.scss'
import Button from "../../shared/ui/Button/Button";

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt={'Eta Car Systems'}/>
            <Menu/>
            <Button text={'Get estimation'} onClick={()=>{}} variant={"stroke"}/>
        </header>
    )
}
