export function checkVotingStatus(date) {
    const today = new Date();
    const inputDate = new Date(date);
    const isToday = inputDate.toDateString() === today.toDateString();

    if (isToday) {
        return { canVote: true, message: 'Voting is enabled for today' };
    } else if (inputDate < today) {
        return { canVote: false, message: 'Voting is disabled for past days' };
    } else {
        return { canVote: false, message: 'Voting is not yet enabled for future days' };
    }
}

// Placeholder for time-based voting logic
export function updateVotingStatus() {
    console.log('Checking and updating voting status...');
    // Implement server-side logic to enable/disable voting
}