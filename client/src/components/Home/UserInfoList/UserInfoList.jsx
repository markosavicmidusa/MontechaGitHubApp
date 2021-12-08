import React from 'react'

export default function UserInfoList({ mainData, updated, created }) {
   
    return (
        <div className='user-info-list'>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    Name:
                </div>
                <div className="ui-listItem2">
                    {mainData.name}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    username:
                </div>
                <div className="ui-listItem2">
                    {mainData.login}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    bio:
                </div>
                <div className="ui-listItem2">
                    {mainData.bio}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    followers :
                </div>
                <div className="ui-listItem2">
                    {mainData.followers}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    following :
                </div>
                <div className="ui-listItem2">
                    {mainData.following}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    Joining date :
                </div>
                <div className="ui-listItem2">
                    {created}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    Last update :
                </div>
                <div className="ui-listItem2">
                    {updated}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    Public repos :
                </div>
                <div className="ui-listItem2">
                    {mainData.public_repos}
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">

                    blogUrl:
                </div>
                <div className="ui-listItem2">
                    {<a style={{ 'font-size': '11pt' }} href={`${mainData.blog}`}>  Visit {mainData.name} </a>
                    }
                </div>
            </div>
            <div className='ui-listItem'>
                <div className="ui-listItem1">
                    email:
                </div>
                <div className="ui-listItem2">
                    {mainData.email == null ? '/' : mainData.email}
                </div>
            </div>

        </div>
    )
}
