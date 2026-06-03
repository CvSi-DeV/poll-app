import type { Choice } from "../types/Poll";

interface PollProps {
    question: string,
    choices: Choice[],
    onVote: (id: number) => void,
    onReset: () => void
}

// Component
function Poll({ question, choices, onVote, onReset }: PollProps) {


    //vote gagnant
    const winner = choices.reduce((best, current) => current.votes > best.votes ? current : best);
    //total des votes 
    const totalVotes = choices.reduce((totalVotes, choice) => totalVotes + choice.votes, 0);
    //pourcentage des votes
    const percentage = totalVotes > 0 ?
        choices.map((c) => ({ [c.id]: totalVotes / c.votes }))
        :
        undefined;
    //    const percentageAttribute = `${percentage[choices.id]}%`

    return (
        <div style={{
            maxWidth: '500px',
            margin: '40px auto',
            padding: '24px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <h2>{question}</h2>
            {choices.map((choice) =>
                <div key={choice.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        marginBottom: '8px',
                        border: '1px solid #f3f4f6',
                        borderRadius: '8px'
                    }}>
                    <span>{choice.label}</span>
                    <span>{choice.votes} votes</span>
                    {/* Progress Bar*/}
                    {percentage !== undefined ?
                        <div style={{
                            height: '8px',
                            backgroundColor: '#ac1a6f',
                            borderRadius: '4px',
                            marginTop: '4px'
                        }}>
                            <div style={{
                                width: `${percentage[choice.id]}%`,
                                height: '100%',
                                backgroundColor: '#3b82f6',
                                borderRadius: '4px',
                                transition: 'width 0.3s ease'
                            }} />
                        </div>
                        :
                        <></>
                    }
                    <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }}
                        onClick={() => onVote(choice.id)}>Voter
                    </button>
                </div>

            )}
            {totalVotes > 0 ?
                <div style={{
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #10b981',
                    borderRadius: '8px',
                    padding: '12px',
                    marginTop: '16px'
                }}>
                    <span>🏆 Gagnant : {winner.label} {winner.votes} votes</span>
                    <span>📊 Total : {totalVotes}</span>
                </div>
                :
                <></>
            }

            <button style={{
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '16px'
            }}
                onClick={onReset}>🔄 Reset
            </button>
        </div >
    )
};

export default Poll;