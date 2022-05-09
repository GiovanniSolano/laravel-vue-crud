<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'sku' => [
                "required",
                Rule::unique('products')->ignore($this->product->sku, 'sku')
            ],
            'description' => 'required',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'sku.required' => 'Sku is required',
            'sku.unique' => 'Sku already exists',
            'description.required' => 'Description is required',
        ];
    }
}
