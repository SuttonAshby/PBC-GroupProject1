shell game logic
    begin game
        load assets
        get username
            input validation
    view instructions modal
    view leaderboard modal
    view credits modal
        
core game logic
    load start location
    load country options
        load random questions
    user input
        if user choice is correct go to new location
                            check RNG weather
                            go to location
                            increment score
                            if final destination then
                                push data to firebase and pull leaderboard score
                            else load next set of questions                            
                       is incorrect inform them correct answer and hide modal so they can try other
                            increment score
        if both are incorrect go to random previous location
utility game logic
    get location weather
    get location images
    question generator
    update score   
    choose border countries
    store locations traveled

UI logic
    loading screen
    gaming display
        current location image
        map tracking current location
        current weather
        clock element
        question modals
    leaderboard modal
    username modal
    credits modal
