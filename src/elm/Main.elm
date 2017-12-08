module Main exposing (main)

import Html exposing (..)


type alias Model =
    Int


main : Program Never Model Msg
main =
    beginnerProgram
        { model = 0
        , update = update
        , view = view
        }


type Msg
    = NoOp


update : Msg -> Model -> Model
update msg model =
    model


view : Model -> Html Msg
view model =
    div [] [ text "Hello from Elm!" ]
