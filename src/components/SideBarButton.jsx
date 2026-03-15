import {Link} from 'react-router-dom'

function SideBarButton({to,icon:Icon, sectionName,isOpen,setSectionOpen,sectionOpen}) {

    const baseBtnStyle = 'flex items-center p-2 md:p-3 rounded-md hover:bg-slate-700 cursor-pointer w-full oswald-font';
    const btnOpenStyle ='flex-col md:flex-row gap-1 md:gap-3 text-xs md:text-base';
    const btnCloseStyle ='flex-col justify-center text-xs';

    return(
        <>
            <Link className="" to={to}>
                <button className={`${baseBtnStyle} ${isOpen?btnOpenStyle:btnCloseStyle} ${sectionOpen===sectionName&&'bg-slate-700'}`}
                        onClick={()=>setSectionOpen(sectionName)}>
                    <Icon className={'text-2xl md:text-3xl'}/>
                    {sectionName}</button>
            </Link>
        </>
    );
}

export default SideBarButton;