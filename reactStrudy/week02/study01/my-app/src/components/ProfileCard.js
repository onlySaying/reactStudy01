export const ProfileCard = ({profileInfo}) =>
{
    return<div>
        {
            profileInfo.map(fruit => fruit + " ")
        }
    </div>
}

export default ProfileCard;