export const Button = ({ children, target, label }) => {
    return (

        <button className='btn btn-secondary d-flex gap-2 align-items-center' data-bs-toggle="modal" data-bs-target={`#${target}`}>
            {children}
            <p className="m-0">{label}</p>
        </button>
    )
}