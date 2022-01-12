import { CardWrapper, CardContent } from '../utils/global'
import { globalType } from '../utils/global'

const Card = ({children}: globalType) => {
    return (
        <CardWrapper>
            <CardContent>
                {children}
            </CardContent>
        </CardWrapper>
    )
}

export default Card