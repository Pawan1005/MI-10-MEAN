import React from 'react';

function Functiontime() {
    const date = new Date();
    return (
        <div>
            <h1>This is a "Function Component" for time  </h1>

            <h2>Today's Date :
            {
                    date.toLocaleString('en-US',
                        {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })
                }
            </h2>

            <h2>
                Day :
            {
                    date.toLocaleString('en-US',
                        {
                            weekday: 'short'
                        })
                }
            </h2>

            <h2>
                Current Time :
                    {
                    date.toLocaleTimeString(
                        'en-US', { hour12: true }
                    )
                }
            </h2>
        </div>
    );
}

export default Functiontime;
