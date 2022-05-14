import React, { useEffect, useState } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  const [curSpeakerId, setCurSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId: ${curSpeakerId}`;
    console.log(`useEffect: setting the title to ${curSpeakerId}`);
  }, [curSpeakerId]);

  return (
    <div>
      <span>mouseEventCnt: ${mouseEventCnt}</span>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurSpeakerId(speakerId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver:${speakerId}`);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
