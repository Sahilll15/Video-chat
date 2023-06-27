import React from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const Room = () => {
    const {roomId}=useParams();

    const Mymeeting=async(element)=>{
        const appID =1181415195;
 const serverSecret = "41b639304edd235a722d7499e41069be";

 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),'username');
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 zp.joinRoom({
    container: element,
   
    scenario: {
     mode: ZegoUIKitPrebuilt.VideoConference,
    },
});
};

    
  return (

    <div className='room-page'>
       
        <div ref={Mymeeting}/>
    </div>
  )
}

export default Room