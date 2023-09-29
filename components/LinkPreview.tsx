import Image from 'next/image';

type LinkPreviewProps = {
    linkPreview: {
        title: string,
        description: string,
        image: string
    }
}


const LinkPreview = ({ linkPreview }: LinkPreviewProps) => {

    return (
        <div>
            <h2 className='text-lg font-bold mb-1 mt-6'>{linkPreview.title}</h2>
            <p className='text-base text-slate-200 mb-3'>{linkPreview.description}</p>
            {linkPreview.image ?
                <img
                    src={linkPreview.image}
                    alt="Link Preview" /> : ""}
        </div>
    );
};

export default LinkPreview;
