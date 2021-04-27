import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import 'react-bootstrap'
const Reviews = (props) => {
    let reviews = props.reviews
    let stars = new Array(10).fill(0);
    function formatedDate(str){
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]

        str = new Date(str)
        let date = str.getDate() + " " + months[str.getMonth()] + " " + str.getFullYear()
        
        return (date)
    }
    function ago(str){
        let firstDate = new Date(str)
        const ONE_DAY = 24*60*60*1000;
        let secondDate = new Date()
        
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / ONE_DAY));

        return (diffDays + ' days ago')
    }
    return(
        <div>
            {reviews.map((rev,index)=>{
                return(
                        <div className="user-reviews__review row mb-5">
                            <div className='col-4'>
                                <div className='avatar d-flex align-items-center'>
                                    {rev.author_details.avatar_path && rev.author_details.avatar_path.includes('avatar')? 
                                    <>
                                        <img style={{width:75}} src={`${rev.author_details.avatar_path.substring(1,rev.author_details.avatar_path.length)}`}/>
                                    </>
                                    :
                                    <>
                                        <img style={{width:75}} src='https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'/>
                                    </>
                                    }
                                </div>
                                <div className='user-info'>
                                    <a href=''>{rev.author_details.username}</a>
                                    <p style={{color:'gray', fontSize:13, margin:0}}>{formatedDate(rev.updated_at)}</p>
                                    <p style={{color:'gray', fontSize:13}}>{ago(rev.updated_at)}</p>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div className="rating mb-3">
                                    {stars.map((star,index)=>{
                                        if(Number(rev.author_details.rating) > index){
                                            return (<AiFillStar color={'gold'}/>)
                                        }else return (<AiFillStar color={'gray'}/>)
                                    })}
                                </div>
                                <div className='review-text'>
                                    <p>{rev.content}</p>
                                </div>
                            </div>
                        </div>
                )
                
            })}
        </div>
    )
}

export default Reviews