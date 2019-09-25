# Chore-Tracker
---

Live Heroku Url - https://chore-tracker-app.herokuapp.com 

## AUTH Endpoints

### POST /api/auth/register

    -input:
        -name                               -string
        -username         -Required         -string
        -email                              -string
        -password         -Required         -string

    -returns 
        "id": [
            1
           ]
  
  -Will register the parent user

### POST /api/auth/login

    -input:
        -username           -Required     -string
        -password           -Required     -string

    -returns 
{
  "message": "Welcome User!",
  "token": "generates token",
  "user": 1
}

-Will register the parent user

## Endpoints ##

## Family

### GET /api/auth/user/:id

    -returns array of all members of the family
    
    
## Chores

### GET /api/auth/user/1/chores

    -returns an array of chores

### PUT /api/auth/user/chores/:id

    -input:
        -name           -string
        -how_long       -string
        -points         -integer
        -due_date       -string
        -done_date      -string
        -notes          -string
        -User_id        -integer
        
        -returns updated chore
        
### DELETE /api/auth/user/chores/:id

  -deletes the chore of the selected id
  
        
## Children

### POST /api/auth/user/register-child

    -Adds a child to the family
    
### PUT /api/auth/user/children/:id

    -input:
        -name          -string
        -username      -string
        -age           -integer
        -points        -integer
        -child         -boolean

    -returns updated children

### DELETE /api/categories/:id

  -deletes the child/family member of the selected id
