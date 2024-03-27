function scrollToDiv(targetId) {
    let targetDiv = document.getElementById(targetId);
    targetDiv.scrollIntoView({ behavior: 'smooth'});
};

function redirecionarParaGmail() {
    window.open('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJvpbTBQPdmckNJKdvwNRhndwTwmTSPCdgKgFQxnSWGGmcCNRhspqpVKmbcCphkrTxDNTLB', '_blank');
}
