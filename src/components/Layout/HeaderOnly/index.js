import Header from "~/components/Layout/components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
