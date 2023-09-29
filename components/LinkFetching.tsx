'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LinkPreview from './LinkPreview';

const initialState = {
    title: "",
    description: "",
    image: "",
};

const LinkFetching = () => {
    const [url, setUrl] = useState('');
    const [linkPreview, setLinkPreview] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`/api/link-preview?url=${url}`);
                setLinkPreview(response.data)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (url) {
            fetchData();
        } else {
            setLinkPreview(initialState);
        }
    }, [url]);


    return (
        <div className='w-full'>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                className='placeholder-slate-900 text-slate-800 w-full'
                onChange={(e) => setUrl(e.target.value)}
            />

            {isLoading ?
                <div className='loader_wrapper'>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                :
                <LinkPreview linkPreview={linkPreview} />
            }
        </div>
    );
};

export default LinkFetching;
