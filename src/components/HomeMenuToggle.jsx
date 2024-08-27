/* eslint-disable react/prop-types */
const MenuToggle = ({ toggle }) => {

    const Path = (props) => (
        <path
            fill="#ffffff"
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            {...props}
        />
    );

    return (
        <button onClick={toggle}>
            <svg width="23" height="18" viewBox="0 0 23 18">
                <Path
                    d="M 2 2.5 L 20 2.5"
                    className="top"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
                <Path
                    d="M 2 16.346 L 20 16.346"
                    className="bottom"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    )
};

export default MenuToggle;