import classNames from "classnames"
import UserAvatar from "../../../UserAvatar/UserAvatar"
import './MessengerDialog.css'
interface MessengerDialogProps {
    className?:string
}

const MessengerDialog: React.FC<MessengerDialogProps> = ({className}) => {
    return (
        <div className='Messenger-dialog-link'>
            <div className="Messenger-dialog-link__left">
                <UserAvatar className={classNames('Messenger-dialog-link__left__user-avatar',className)} />
            </div>
            <div className="Messenger-dialog-link__right">
                <div className="Messenger-dialog-link__right__name">User name</div>
                <div className='Messenger-dialog-link__right__last-message'>last-message...</div>
            </div>
        </div>
    )

}

export default MessengerDialog