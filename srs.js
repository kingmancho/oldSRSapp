/*
    1. Easiness factor, after a card is graduated, 
    the easiness factor starts at 2.5, can never go below 1.3, or else the SRS system will not be helpful to memorization
    then will stay the same or decrease based on 
    how well you know after graduation.
    The EF represents how much the days will multiply to next review
        EF of 2.5 means the next review will be 2.5x days of the last review time
        The days will round, 2.5 days is 3 days for example.

    Before Graduation, the cards go through levels of time intervals based on your review
    1 - 1m
    2 - 5m
    2 - 10m
    3 - 1d
    4 - Immedietly graduates


    2. Review 
    Easieness factor formula:
        EF':=EF+(0.1-(5-n)*(0.08+(5-n)*0.02))
        n = rating
            If rating is 4, EF stays the same

     1 - No idea
            If in Graduation, immediatly puts card back into learning on step 2
            If in learning, card immedietly goes to first step
     2 - Incorrect, but remembered once saw card
            If in learning, card goes to second step
     3 - Correct but it was more of a educated guess
            If in learning, card goes to third step
     4 - Correct with hesitation
            Goes to third step in learning
            If graduated, EF stays the same
     5 - Correct with no hesitation
            Instantly puts card in graduation and sets EF to 2.5, starting at 1d
*/

