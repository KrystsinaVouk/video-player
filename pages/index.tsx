export default function Index() {
    return (
        <>
            <div className={"center"}>
                <h1>Welcome!</h1>
                <h3>Here all the best videos go!</h3>
            </div>

            <style jsx> {
                `
                  .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                `
            }
            </style>
        </>
    )
}
