module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (attribute, value)
import Html.Events exposing (on, onInput)
import Json.Decode as Json


type alias Model =
    { input : String
    }


init : Model
init =
    { input = ""
    }


main : Program Never Model Msg
main =
    beginnerProgram
        { model = init
        , update = update
        , view = view
        }


type Msg
    = NoOp
    | OnInput String


update : Msg -> Model -> Model
update msg model =
    case msg of
        OnInput value ->
            { model | input = value }

        NoOp ->
            model


view : Model -> Html Msg
view model =
    div
        []
        [ h1 [] [ text "Webpack with web components" ]
        , node "paper-input" [ onInput OnInput, value model.input ] []
        , text model.input
        ]
