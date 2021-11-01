import React from 'react';

const Map = () => {
    return (
        <div style={{ position: 'relative' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110613.28283195972!2d31.23566846714353!3d29.960310577678285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2sMaadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1635756790633!5m2!1sen!2seg"
                height="450"
                style={{
                    border: 0,
                    width: '100%',
                    position: 'relative',
                    filter: 'grayscale(70%)'
                }}
                allowFullScreen=""
                loading="lazy"
                title="myFrame"
            ></iframe>
        </div>
    );
};

export default Map;
